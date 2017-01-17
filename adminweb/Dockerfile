FROM node:6.2.0-wheezy

# タイムゾーンを日本に設定
RUN ln -sf /usr/share/zoneinfo/Japan /etc/localtime

EXPOSE 40125

RUN npm install

CMD ["node", "--debug", "/docker/adminweb/bin/www"]
