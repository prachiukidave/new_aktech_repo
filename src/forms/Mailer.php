<?php
require(__DIR__.'/../vendor/PHPMailer/Exception.php');
require(__DIR__.'/../vendor/PHPMailer/PHPMailer.php');
require(__DIR__.'/../vendor/PHPMailer/SMTP.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Mailer {  
  
  function sendMail($name,$email,$cc,$sub,$msg){
    
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->Mailer = "smtp";
    $mail->SMTPDebug  = 0;  //disable later
    $mail->SMTPAuth   = TRUE;
    $mail->SMTPSecure = "ssl";
    $mail->Port       = 465;

    //Update this
    $mail->Host       = 'ds23.dnsloader.com';
    $mail->Username   = 'info@rapidsrvsolutions.com';
    $mail->Password   = 'Info@2021';

    
    $mail->IsHTML(true);
    $mail->AddAddress($email, $name);
    $mail->addCC($cc);
    //Update line below
    $mail->SetFrom("info@rapidsrvsolutions.com", "Info");

    $mail->Subject = $sub;

    $mail->MsgHTML($msg); 
    if(!$mail->Send()) {
      echo "Error while sending Email.<br>";
      // var_dump($mail);
    } else {
      $newURL = "../email_success.html";
      header('Location: '.$newURL);
    }
  }

  }
?>