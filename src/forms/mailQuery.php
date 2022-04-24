<?php 
require(__DIR__.'/Mailer.php');

  $mailer = new Mailer();

  $first_name = $_POST['name'];
  $email = $_POST['email'];
  $mobile_number = $_POST['mobile_number'];
  $subject = $_POST['subject'];

  $to_name = 'Rapid Solutions';
  $to_email = 'info@rapidsolutions.com';
  $cc = 'pratik.kulkarni54@gmail.com';
  $mail_subject = 'New Enquery From Website';
  $mail_body = "Hello, Please contact to Name: ". $first_name. ". Email : " . $email. ". Moblie Number : " . $mobile_number. ". Regarding : " . $subject;
  
  $mailer->sendMail($to_name,$to_email,$cc,$mail_subject,$mail_body);

?>