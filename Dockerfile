FROM ubuntu:20.04

RUN apt update
RUN apt -y install curl vim tree ack

RUN useradd -ms /bin/bash -u 1000 user
USER 1000:1000

RUN curl https://get.volta.sh | bash
ENV BASH_ENV /home/user/.bashrc
ENV VOLTA_HOME /home/user/.volta
ENV PATH $VOLTA_HOME/bin:$PATH
RUN volta install node
RUN volta install yarn
RUN yarn global add ember-cli
WORKDIR /work
