<template>
    <section>
      <table class="styled-table">
        <thead>
          <tr>
            <th></th>
            <th>Grésigne</th>
            <th>Ségala</th>
            <th>Cogagne</th>
            <th>Sidobre</th>
            <th>Castrais</th>
            <th>Haut Languedoc</th>
            <th>Montagne Noire</th>
          </tr>
        </thead>
        <tbody>
          <tr class="data-row">
            <th>ICL</th>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
          </tr>
          <tr class="data-row">
            <th>IH</th>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
          </tr>
          <tr class="data-row">
            <th>IS</th>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
            <td name="IDS">4000</td>
          </tr>
          <tr class="data-row">
            <th>IEPx</th>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
          </tr>
          <tr class="data-row">
            <th>IFM</th>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
            <td name="IDD">5000</td>
          </tr>
          <tr class="data-row">
            <th>NSV2</th>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
          </tr>
          <tr class="data-row">
            <th>IDI</th>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
            <td name="IDR">6000</td>
          </tr>
          <tr class="data-row">
            <th>Température de chaussée</th>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
          </tr>
          <tr class="data-row">
            <th>Force du vent</th>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
          </tr>
          <tr class="data-row">
            <th>Taux d'humidité</th>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
          </tr>
          <tr class="data-row">
            <th>Nébulosité</th>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
            <td name="conditions">10</td>
          </tr>
        </tbody>
      </table>
    </section>
</template>

<script>
    export default {
        name : 'DataTab',
        components: {

        },
        data: function () {
            return {

            }
        },
    }
</script>

<style scoped>
section{
  position: absolute;
  top: 25%;
  left: 25%
}
.export-button {
  display: block;
  margin-top: 20px;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.export-button:hover {
  background-color: #666;
}

.tabs {
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
}

.tab {
  padding: 10px 20px;
  background-color: #eee;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 1;
  text-align: center;
}

.tab.active {
  background-color: #fff;
}

.tab:hover {
  background-color: #ddd;
}

.tab-content {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0 5px 5px 5px;
  width: 100%;
}

/*Table*/
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>