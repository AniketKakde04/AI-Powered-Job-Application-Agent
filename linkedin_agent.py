import asyncio
import os
from browser_use import Agent, Browser, BrowserConfig
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv

load_dotenv()

async def job_search_agent(skills):
    browser_config = BrowserConfig(headless=False)
    browser = Browser(config=browser_config)
    agent = Agent(
         task=f"""1. Navigate to https://www.linkedin.com/login
2. Login with {os.getenv('LINKEDIN_EMAIL')} and {os.getenv('LINKEDIN_PASSWORD')}
3. click on jobs tab 
4. For each skill below, search for jobs one by one:
   {', '.join(skills)}
5. Click the 'Save' button for the first two jobs
6. Confirm that both jobs are saved successfully
7. End the process after saving the jobs
""",
        llm=ChatGoogleGenerativeAI(model="gemini-2.0-flash"),
        browser=Browser(config=browser_config)
    )

    try:
        return await agent.run()
    except Exception as e:
        print(f"Automation failed: {str(e)}")
        return None

def run_linkedin_search(skills):
    if os.name == 'nt':
        asyncio.set_event_loop(asyncio.new_event_loop())


    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    try:
        loop.run_until_complete(job_search_agent(skills))
    finally:
        loop.close()
