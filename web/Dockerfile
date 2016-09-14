FROM node:6.2.0-wheezy

# タイムゾーンを日本に設定
RUN ln -sf /usr/share/zoneinfo/Japan /etc/localtime

EXPOSE 3000

RUN npm install

CMD ["node", "--debug", "/docker/vars/bin/www"]
