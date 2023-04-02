<template>
    <aside>
      <label for="checkbox1">
        <input type="checkbox" id="checkICL" class="filter"> ICL
      </label>
      <label for="checkbox2">
        <input type="checkbox" id="checkIH" class="filter"> IH
      </label>
      <label for="checkbox3">
        <input type="checkbox" id="checkIS" class="filter"> IS
      </label>
      <label for="checkbox4">
        <input type="checkbox" id="checkIEPx" class="filter"> IEPx
      </label>
      <label for="checkbox5">
        <input type="checkbox" id="checkIFM" class="filter"> IFM
      </label>
      <label for="checkbox6">
        <input type="checkbox" id="checkNSV2" class="filter"> NSV2
      </label>
      <label for="checkbox7">
        <input type="checkbox" id="checkIDI" class="filter"> IDI
      </label>
      <button class="export-button" @click="exporter">Exporter</button>
    </aside>
</template>

<script>
    export default {
        name : 'AsideComp',
        components: {

        },
        data: function () {
            return {

            }
        },
        methods: {
            exporter: function (){
                // Création d'une nouvelle feuille Excel
                var feuille = XLSX.utils.aoa_to_sheet([[]]);
                var classeur = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(classeur, feuille, 'Feuille 1');

                // Formatage de la feuille Excel
                // Fusion des cellules pour les titres
                feuille['!merges'] = [{s: {r: 1, c: 0}, e: {r: 2, c: 1}}, //A2:B3
                                      {s: {r: 3, c: 0}, e: {r: 5, c: 1}}, //A4:B6
                                      {s: {r: 6, c: 0}, e: {r: 7, c: 1}}, //A7:B9
                                      {s: {r: 8, c: 0}, e: {r: 9, c: 1}}, //A9:B10
                                      {s: {r: 10, c: 0}, e: {r: 10, c: 2}}, //A11:C11

                                      {s: {r: 11, c: 0}, e: {r: 31, c: 0}}, //A12:A32
                                      {s: {r: 11, c: 1}, e: {r: 17, c: 1}}, //B12:B18 
                                      {s: {r: 18, c: 1}, e: {r: 24, c: 1}}, //B19:B25
                                      {s: {r: 25, c: 1}, e: {r: 31, c: 1}}, //B26:B32

                                      {s: {r: 32, c: 0}, e: {r: 59, c: 0}}, //A33:A60
                                      {s: {r: 32, c: 1}, e: {r: 38, c: 1}}, //B33:B39
                                      {s: {r: 39, c: 1}, e: {r: 45, c: 1}}, //B39:B46
                                      {s: {r: 46, c: 1}, e: {r: 52, c: 1}}, //B47:B53
                                      {s: {r: 53, c: 1}, e: {r: 59, c: 1}}, //B54:B60
                                    ];

                
                //XLSX.utils.sheet_add_aoa(feuille, 'A1', { t: 's', v: 'Name', s: { font: { blod: 'true' } } });
                //XLSX.utils.sheet_add_aoa(feuille, [["Température (max)"]], { t: 's', v: 'Name', s: { font: { blod: 'true' } } , origin: "A2", skipHeader: true,});

                XLSX.utils.sheet_add_aoa(feuille, [["Température (max)"]], {origin: "A2", skipHeader: true,});
                XLSX.utils.sheet_add_aoa(feuille, [["Vent"]], {origin: "A4"});
                XLSX.utils.sheet_add_aoa(feuille, [["Humidité (%)"]], {origin: "A7"});
                XLSX.utils.sheet_add_aoa(feuille, [["Nébulosité (%)"]], {origin: "A9"});
                XLSX.utils.sheet_add_aoa(feuille, [["Pluie (mm)"]], {origin: "A11"});

                XLSX.utils.sheet_add_aoa(feuille, [["Indices de sécheresse"]], {origin: "A12"});
                XLSX.utils.sheet_add_aoa(feuille, [["Indicateurs de risques"]], {origin: "A33"});

                XLSX.utils.sheet_add_aoa(feuille, [["Air (°C)"], ["Chaussée (°C)"], ["Orientation"], ["Vitesse (kh/h)"], ["Rafales (km/h)"],
                                                    ["08h00"], ["17h00"],["08h00"], ["17h00"]], {origin: "C2", skipHeader: true,});

                XLSX.utils.sheet_add_aoa(feuille, [["ICLx"]], {origin: "B12"});
                XLSX.utils.sheet_add_aoa(feuille, [["IH"]], {origin: "B19"});
                XLSX.utils.sheet_add_aoa(feuille, [["IS"]], {origin: "B26"});
                XLSX.utils.sheet_add_aoa(feuille, [["IEPx"]], {origin: "B33"});
                XLSX.utils.sheet_add_aoa(feuille, [["IFM"]], {origin: "B40"});
                XLSX.utils.sheet_add_aoa(feuille, [["NSV2"]], {origin: "B47"});
                XLSX.utils.sheet_add_aoa(feuille, [["IDI"]], {origin: "B54"});
                
                /*var data = getConditions();
                XLSX.utils.sheet_add_aoa(feuille, data, {origin: "D2", skipHeader: true,});*/
               

                // Exportation de la feuille Excel
                XLSX.writeFile(classeur, 'indices.xlsx');
            },

        },
        
        computed : {
            getICL : async function() {
                
            },
        }
    }
</script>

<style scoped>
aside {
  background-color: #eee;
  padding: 20px;
  width: 200px;
  height: 100vh;
}

/* Styles pour les checkbox */
label {
  display: block;
  margin-bottom: 10px;
}

td {
  text-align: center;
}
</style>