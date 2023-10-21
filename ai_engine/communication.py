```python
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

class Communication:
    def __init__(self, email, password):
        self.email = email
        self.password = password
        self.server = smtplib.SMTP('smtp.gmail.com', 587)

    def send_email(self, to_email, subject, message):
        msg = MIMEMultipart()
        msg['From'] = self.email
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.attach(MIMEText(message, 'plain'))

        self.server.starttls()
        self.server.login(self.email, self.password)
        text = msg.as_string()
        self.server.sendmail(self.email, to_email, text)
        self.server.quit()

    def initiate_communication(self, brand_email, influencer_name, brand_name):
        subject = f"Partnership Proposal from {influencer_name}"
        message = f"Hello {brand_name},\n\nI am {influencer_name}, an influencer on the platform. I believe a partnership between us could be mutually beneficial. I look forward to discussing this opportunity further.\n\nBest,\n{influencer_name}"
        self.send_email(brand_email, subject, message)

    def follow_up(self, brand_email, influencer_name, brand_name):
        subject = f"Follow-up on Partnership Proposal from {influencer_name}"
        message = f"Hello {brand_name},\n\nI wanted to follow up on the partnership proposal I sent earlier. I am excited about the potential of working together and would love to discuss this further.\n\nBest,\n{influencer_name}"
        self.send_email(brand_email, subject, message)
```