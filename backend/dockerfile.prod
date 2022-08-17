FROM python:3
WORKDIR /app

COPY requirements.txt .
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

CMD python manage.py collectstatic --no-input && \
    python manage.py makemigrations && \
    python manage.py migrate && \
    python manage.py runserver 0.0.0.0:8000
