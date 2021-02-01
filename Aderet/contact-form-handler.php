<? php
	$name = $_Post['name'];
	$visitor_email = $_Post['email'];
	$message = $_Post['message'];

	$email_from = "aderet1010@gmail.com";

	$email_subject = "New Form Submission";

	$email_body = "User Name: $name./n".
					"User Email: $vistor_email./n".
					"User Message: $message./n";

	$to ="aderet1010@gmail.com";

	$headers = "From: $email_from /r/n";

	$headers .= "Reply-To: $visitor_email /r/n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: contact.html");



?>