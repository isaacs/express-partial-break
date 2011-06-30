node server.js &

sleep 1

echo "DOING PUT"
echo "---------"
curl -X PUT -d message localhost:1337/messages
echo "---------"
echo "DOING GET"
echo "---------"
curl localhost:1337/messages

