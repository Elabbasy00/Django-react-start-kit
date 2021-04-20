FROM node:14-alpine as build

WORKDIR /app/frontend
COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY ./frontend ./
RUN yarn build


# stage 2
# move react build to nginx 

FROM nginx:1.19-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html

# run nginx
CMD ["nginx", "-g", "daemon off;"]
