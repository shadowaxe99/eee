```python
import spacy
import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from profile_analysis import analyze_profile
from brand_matching import suggest_partnership
from communication import initiate_communication, manage_emails
from proposal_generation import create_proposal
from contract_generation import generate_contract
from scheduling import schedule_meeting

class AIAgent:
    def __init__(self, user):
        self.user = user
        self.nlp = spacy.load('en_core_web_sm')
        self.profile = None
        self.brands = pd.DataFrame()
        self.proposal = None
        self.contract = None
        self.schedule = None

    def assign_agent(self):
        self.profile = analyze_profile(self.user)
        return self

    def analyze_profile(self):
        self.profile = analyze_profile(self.user)
        return self.profile

    def suggest_partnership(self):
        self.brands = suggest_partnership(self.profile)
        return self.brands

    def initiate_communication(self, brand):
        message = initiate_communication(self.user, brand)
        manage_emails(message)
        return self

    def create_proposal(self, brand):
        self.proposal = create_proposal(self.user, brand)
        return self.proposal

    def manage_emails(self, message):
        manage_emails(message)
        return self

    def generate_contract(self, brand):
        self.contract = generate_contract(self.user, brand)
        return self.contract

    def schedule_meeting(self, brand):
        self.schedule = schedule_meeting(self.user, brand)
        return self.schedule
```