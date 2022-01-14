const doghnutExchange = document.querySelector('.profile-distribution-exchange')
const doghnutContracts = document.querySelector('.profile-distribution-contracts')
const doghnutCurrencies = document.querySelector('.profile-distribution-currencies')

if (doghnutCurrencies || doghnutContracts || doghnutExchange) {
  doghnutExchange.getContext("2d")
  doghnutContracts.getContext("2d")
  doghnutCurrencies.getContext("2d")

  const arrayDoghnutExchange = [{
    value: 40,
  }, {
    value: 120,
  }, {
    value: 10,
  }, {
    value: 20,
  }, {
    value: 20,
  }, {
    value: 12,
  }, {
    value: 1,
  }, {
    value: 120,
  }, {
    value: 120,
  }];

  const arrayDoghnutContracts = [{
    value: 2440,
  }, {
    value: 1240,
  }, {
    value: 1440,
  }, {
    value: 1220,
  }, {
    value: 1120,
  }, {
    value: 112,
  }, {
    value: 111,
  }, {
    value: 1201,
  }, {
    value: 1210,
  }];

  const arrayDoghnutCurrencies = [{
    value: 400,
  }, {
    value: 1200,
  }, {
    value: 1000,
  }, {
    value: 200,
  }, {
    value: 2000,
  }, {
    value: 1002,
  }, {
    value: 1000,
  }, {
    value: 120,
  }, {
    value: 1200,
  }];


  const configexchange = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: arrayDoghnutExchange,
        backgroundColor: [
          'rgba(167, 194, 249, 1)',
          'rgba(144, 171, 222, 1)',
          'rgba(122, 152, 212, 1)',
          'rgba(83, 120, 190, 1)',
          'rgba(54, 98, 159, 1)',
          'rgba(25, 66, 134, 1)',
          'rgba(15, 46, 97, 1)',
        ],
        hoverOffset: 10,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true
    }
  };

  const configcontracts = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: arrayDoghnutContracts,
        backgroundColor: [
          'rgba(225, 115, 110, 1)',
          'rgba(223, 148, 108, 1)',
          'rgba(226, 216, 132, 1)',
          'rgba(129, 200, 133, 1)',
          'rgba(131, 215, 196, 1)',
          'rgba(176, 189, 184, 1)',
        ],
        hoverOffset: 10,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true
    }
  };

  const configcurrencies = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: arrayDoghnutCurrencies,
        backgroundColor: [
          'rgba(225, 115, 110, 1)',
          'rgba(223, 148, 108, 1)',
          'rgba(226, 216, 132, 1)',
          'rgba(129, 200, 133, 1)',
          'rgba(131, 215, 196, 1)',
          'rgba(176, 189, 184, 1)',
        ],
        hoverOffset: 10,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true
    }
  };


  const doghnutExchangeChart = new Chart(doghnutExchange, configexchange);
  const doghnutContractsChart = new Chart(doghnutContracts, configcontracts);
  const doghnutCurrenciesChart = new Chart(doghnutCurrencies, configcurrencies);
}
