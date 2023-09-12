<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');
$name = $_GET['name'];
$tel = $_GET['tel'];
$em = $_GET['email'];
$ab = $_GET['about'];
$text = "*mxmr.ru order*%0AReferal: " . $ref . "%0AIP: " . $_SERVER['REMOTE_ADDR'] . "%0AName: " . $name . "%0ATel: " . $tel . "%0AEmail: " . $em . "%0AAbout: " . $ab;
$url = '********'; // Telegram API hidden for GitHub
$response = json_decode(file_get_contents($url));
if ($response !== false) {
    $ar = array(
        'ok' => $response->ok
    );
    echo json_encode($ar);
}
