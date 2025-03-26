from flask import Flask, render_template, request, session
import os
from resume_parser import extract_skills
from linkedin_agent import run_linkedin_search

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['UPLOAD_FOLDER'] = 'static/uploads'

# Ensure upload folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        file = request.files['resume']
        if file:
            filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(filename)
            skills = extract_skills(filename)
            if skills:  # Ensure skills is a valid list
                session['skills'] = ','.join(skills)
            else:
                session['skills'] = ''
            return render_template('index.html', skills=skills)
    return render_template('index.html')

@app.route('/start-search', methods=['POST'])
def start_search():
    skills = session.get('skills', '')
    skills_list = skills.split(',') if skills else []
    run_linkedin_search(skills_list)
    return "AI job search initiated! Check the automated browser window."

if __name__ == '__main__':
    app.run(debug=False, use_reloader=False)
