function clicked () {
	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var coruser = 'Ciao';
	var corpass = 'ForzaNapoli';

		if(user.value == coruser)  {

			if(pass.value == corpass) {

				window.alert("Benvenuto! Buonasera! " + user.value);
				window.open("http://www.twitter.com/Marticvs_");

			}  else  {

				window.alert("Credenziali errate! verifica attentamente password e username!");

			}

		}  else {

			window.alert("Credenziali errate! verifica attentamente password e username!");



		}
}

// forza Napoli always :) 