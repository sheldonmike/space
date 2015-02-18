<!-- <?php
     
// get the posted data 
$name = $_POST['contact_Name']; 
$email_address = $_POST['contact_Email']; 
$spacelove = $_POST['contact_Message'];
//} 

// make sure email address is not spam
$sanitizedEmail = filter_var($email_address, FILTER_SANITIZE_EMAIL);
         
// write the email content 
 
//$email_content .= "Email Address: $email_address\n"; 
$email_content = "Hey Mike,\n\n";
$email_content .= " $spacelove\n\n";
$email_content .= "Thanks,\n\n$name\n";
     
// send the email 
mail ("sheldonmike@gmail.com", "New Contact Form Message", $email_content, 'From: ' . $sanitizedEmail); 
  
?> --> 

 <?php
 
// get the posted data 
$firstname = $_POST['contact_firstName'];
$lastname = $_POST['contact_lastName'];
$email = $_POST['contact_Email']; 
$spacelove = $_POST['contact_Message'];
//} 

// make sure email address is not spam
$sanitizedEmail = filter_var($email_address, FILTER_SANITIZE_EMAIL);
    
    
    //Process a new form submission in HubSpot in order to create a new Contact.
    
    $hubspotutk = $_COOKIE['hubspotutk'];  //grab the cookie from the visitors browser.
    $ip_addr = $_SERVER['REMOTE_ADDR'];  //IP address too.
    $hs_context = array(
            'hutk' => $hubspotutk,
            'ipAddress' => $ip_addr,
            'pageUrl' => 'http://space.mikesheldon.com/',
            'pageName' => 'Andromeda Galaxy'
        );
    $hs_context_json = json_encode($hs_context);
    
    //Need to populate these variables with values from the form.
    $str_post = "firstname=" . urlencode($firstname)
            . "&lastname=" . urlencode($lastname)
            . "&email=" . urlencode($email)
            . "&spacelove=" . urlencode($spacelove)
            . "&hs_context=" . urlencode($hs_context_json);  //Leave this one be :)
    
     //replace the values in this URL with your portal ID and your form GUID
    $endpoint = 'https://forms.hubspot.com/uploads/form/v2/321749/f7535c70-cf31-4fe5-b6c0-26b92da7ad8f';
    
    $ch = @curl_init();
    @curl_setopt($ch, CURLOPT_POST, true);
    @curl_setopt($ch, CURLOPT_POSTFIELDS, $str_post);
    @curl_setopt($ch, CURLOPT_URL, $endpoint);
    @curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
    @curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = @curl_exec($ch);  //Log the response from HubSpot as needed.
    $status_code = @curl_getinfo($ch, CURLINFO_HTTP_CODE); //Log the response status code
    @curl_close($ch);
    echo $status_code . " " . $response;
    
    ?>