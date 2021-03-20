<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];
$token = "1769322964:AAHAWWBKbIuO0z3Wc81BOJc9Vavt8N614HU";
$chat_id = "-538659734";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'comment' => $comment,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ./index.html#Footer');
} else {
  echo "Error";
}
?>