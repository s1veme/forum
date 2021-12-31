FROM python:3.8

RUN apt-get update && apt-get upgrade

ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/forum
ADD . /usr/src/forum

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

ENTRYPOINT ["/usr/src/forum/entrypoint.sh"]