import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    name = data['name']
    email = data['email']
    country = data['country']
    phone = data['phone']
    message = data['message']

    # Get these from environment variables for security
    from_email = os.environ.get('FROM_EMAIL', 'm.hasanzubair01@gmail.com') 
    to_email = 'm.hasanzubair01@gmail.com' 
    password = os.environ.get('EMAIL_PASSWORD', 'aifh dkxi xxbj ieqm') 

    subject = 'New Contact Form Submission'

    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject

    body = f"Name: {name}\nEmail: {email}\nCountry: {country}\nPhone: {phone}\nMessage: {message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(from_email, password)  # Use the from_email here
        server.sendmail(from_email, to_email, msg.as_string())
        server.quit()
        return 'Email sent', 200
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)