FROM python:3.8

RUN apt-get update && apt-get upgrade

ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/forum
ADD . /usr/src/forum

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r requirements.txt
RUN chmod +x entrypoint.sh

ENTRYPOINT ["/usr/src/forum/entrypoint.sh"]