<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');
$ref = $_GET['ref'];
$text = "*mxmr.ru visited*%0AReferal: " . $ref . "%0AIP: " . $_SERVER['REMOTE_ADDR'];
$url = '********' . $text . '********'; // Telegram API hidden for GitHub
$response = json_decode(file_get_contents($url));
if ($response !== false) {
    echo json_encode($response->ok);
}
