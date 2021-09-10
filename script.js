horloge = 
{ 

    init :()  =>
    {   

      
        let date = new Date;
        let degSecondes = date.getSeconds()*6;
        let degMinutes = date.getMinutes()*6;
        let degHours = date.getHours()*30;
        

        document.getElementById("seconde").style = "transform : rotate("+degSecondes+"deg)";
        document.getElementById("minute").style = "transform : rotate("+((degMinutes)+degSecondes/60)+"deg)";
        document.getElementById("heure").style = "transform : rotate("+((degHours)+degMinutes/12)+"deg)";

        setTimeout("horloge.init()", 1000);

        horloge.createNum();
    },

    createNum: () =>
    {
		let i = 0;
        let x=0;
        let y=0;
        let angle = 0;
        let pasChiffre = -90;
        let rayon;

		for(i = 1; i<=12; i++)
		{
			rayon= 230;
			pasChiffre = pasChiffre + 30;
			angle = (pasChiffre)*(Math.PI / 180);
           

			x = (230 + rayon * Math.cos(angle));
			y = (230 + rayon * Math.sin(angle));

			chiffre = document.createElement("chiffre");
			chiffre.id = "chiffre"+i;
            chiffre.className = "chiffre";
		
            document.getElementById("cadre").appendChild(chiffre);
			document.getElementById("chiffre"+i).style.left = x+"px";
			document.getElementById("chiffre"+i).style.top = y+"px";
			document.getElementById("chiffre"+i).innerHTML = i;
			
    	}
    }


}

