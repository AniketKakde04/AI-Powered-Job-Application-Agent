import re
import PyPDF2
from docx import Document

SKILLS_DB = [
    'Python', 'JavaScript', 'Machine Learning', 'Flask', 'Django',
    'AWS', 'SQL', 'React', 'Data Analysis', 'Git', 'Docker', 'AI'
]

def extract_text_from_pdf(file_path):
    text = ''
    with open(file_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        for page in reader.pages:
            text += page.extract_text() or ''  # Ensure empty string if None
    return text

def extract_text_from_docx(file_path):
    doc = Document(file_path)
    return '\n'.join([para.text for para in doc.paragraphs])

def extract_skills(file_path):
    text = ''
    if file_path.endswith('.pdf'):
        text = extract_text_from_pdf(file_path)
    elif file_path.endswith('.docx'):
        text = extract_text_from_docx(file_path)
    
    skills = list(set(skill for skill in SKILLS_DB if re.search(rf'\b{re.escape(skill)}\b', text, re.I)))
    
    return skills if skills else []  # Return an empty list if no skills are found
