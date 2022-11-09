 const de = () => Math.floor(6*Math.random() + 1);
        // de = fonction
        const course = () => {
            //lancer de la course et retourne le vainqueur: lièvre ou tortue

            for (var i = 0; i < 6; i++) {
                const lancer = de();
                if (lancer == 6) {
                    return "lièvre";
                }
                
            }
            return "tortue";
        };

            const victoire = (x) => {
                const resultats = {
                    lièvre: 0,
                    tortue: 0
            };

            for(var i = 0; i < x; i++){
                const vainqueur = course();
                resultats[vainqueur]++;   
            }
           
            console.log(`Sur ${x} tests, le lièvre a gagné ${resultats.lièvre} fois et la tortue 
            ${resultats.tortue} fois`);
            const pclièvre = Math.round(10000 * resultats.lièvre / x)/100;
            const pctortue = Math.round(10000 * resultats.tortue / x)/100;
            //pc=pourcentage
            console.log(`victoire : lièvre = ${pclièvre}%  la tortue ${pctortue}% fois`);
        };
        victoire(10);
        victoire(100);
        victoire(1000);
        victoire(10000);
        victoire(100000);
        victoire(1000000);
