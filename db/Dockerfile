FROM mysql:latest
LABEL maintainer="sretthaterananont@gmail.com"
ENV MYSQL_ROOT_PASSWORD=root
COPY init_db.sql /docker-entrypoint-initdb.d
EXPOSE 3306