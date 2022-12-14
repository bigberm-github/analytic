// host = '172.16.153.122';	// hostname or IP address
//host = '127.0.0.1';	// hostname or IP address
// host = '172.16.153.110';	// hostname or IP address

host1 = 'broker.emqx.io';
port1 = 8083;
//host2 = 'test.mosquitto.org';
host2 = 'public.mqtthq.com';
port2 = 8083;
host3 = 'broker.hivemq.com';
port3 = 8000;
topic = 'esp32/test'; 	// topic to subscribe to
topic2 = 'esp32/power'; 	// topic to subscribe to
topic3 = 'esp32/humid'; 	// topic to subscribe to
useTLS = false;
username = null;
password = null;
PayLoad = "";
 //username = "bigberm";
 //password = "berm#2507";

// path as in "scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]"
//    defaults to "/mqtt"
//    may include query and fragment
//
// path = "/mqtt";
// path = "/data/cloud?device=12345";

cleansession = true;
