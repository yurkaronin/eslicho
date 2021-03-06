<?php

require_once(__DIR__ . '/../.libs/PHPMailer.php');

// parameters
define('MAIL_FROM', 'site@esli-cho.ru');
define('MAIL_SUBJECT', $_POST['subject'] ?? 'Новая заявка с сайта');
define('MAIL_TO', 'yurkaronin@gmail.com' 'info@ronin-consult.ru');

$fields = [
  'name' => 'Имя',
  'email' => 'E-mail',
  'phone' => 'Телефон',
  'text' => 'Комментарий',
];

$files = [
  'file' => ['doc', 'docx', 'pdf', 'txt']
];

// prepare data
$data = $_POST;
$attachFiles = $sendData = [];

foreach ($data as $dataName => $dataElement)
{
  if (array_key_exists($dataName, $fields))
  {
    $sendData[] = sprintf('%s: %s' . PHP_EOL, $fields[$dataName], htmlspecialchars(trim($dataElement)));
  }
}

foreach ($_FILES as $fileName => $fileData)
{
  $fileInfo = pathinfo($fileData['name']);

  if (array_key_exists($fileName, $files) && in_array($fileInfo['extension'], $files[$fileName]))
  {
    $attachFiles[] = [
      'name' => $fileInfo['basename'],
      'path' => $fileData['tmp_name'],
    ];
  }
}

// prepare mail
$mailer = new \PHPMailer\PHPMailer\PHPMailer();

$mailer->SetFrom(MAIL_FROM);

$mailer->CharSet = 'utf-8';
$mailer->Encoding = 'base64';

$mailer->Subject = MAIL_SUBJECT;
$mailer->Body = implode("\n", $sendData);

// mail recepients
$mailer->AddAddress(MAIL_TO);

// attach files
foreach ($attachFiles as $attachFile)
{
  $mailer->AddAttachment($attachFile['path'], $attachFile['name']);
}

// send mail
$mailer->Send();

echo 'OK';
