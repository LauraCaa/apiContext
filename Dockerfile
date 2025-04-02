FROM node:21
WORKDIR "/opt/api_context"
COPY . ./
COPY package*.json .
RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]