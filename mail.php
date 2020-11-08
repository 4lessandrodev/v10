<?php
require_once('mailer/PHPMailer.php');
require_once('mailer/SMTP.php');
require_once('mailer/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

$mail->SMTPOptions = array(
 'ssl' => array(
  'verify_peer' => false,
  'verify_peer_name' => false,
  'allow_self_signed' => true
  )
 );
 
 try {
  $mail->SMTPDebug = SMTP::DEBUG_SERVER;
  $mail->isSMTP();
  $mail->Host = 'smtp.domain.com.br';
  $mail->SMTPAuth = true;
  $mail->Username = 'servidor@domain.com.br';
  $mail->Password = 'passs****';
  $mail->SMTPAutoTLS = false;
  $mail->Port = 587;
  $mail->CharSet = 'UTF-8';
  
  $nome = $_POST['name'];
  $assunto = $_POST['subject'];
  $mensagem = $_POST['message'];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  
  $mail->setFrom('servidor@domain.com.br', 'Site');
  $mail->addCC($email, $nome);
  $mail->addAddress('destin@domain.com.br', 'Vitor');
  $mail->addReplyTo($email, $nome);
  
  $mail->isHTML(true);
  $mail->Subject = $assunto;
  $mail->Body = '<p><strong>Nome: </strong>'. $nome. '</p><p><strong>Assunto: </strong>'. $assunto .'</p><p><strong>Mensagem: </strong>' .$mensagem. '</p><p><strong>Telefone: </strong>'. $phone .'</p>';
  $mail->AltBody = $mensagem;
  
  if($mail->send()) {
   echo '200';
  } else {
   echo '400';
  } 
 } catch (Exception $e) {
  var_dump($e);
 };