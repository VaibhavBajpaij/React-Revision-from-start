import { useEffect, useState } from 'react';

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");
  const [rate, setRate] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  // SVG Icons
  const RefreshIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  );

  // Fetch available currencies
  const fetchCurrencies = async () => {
    try {
      const response = await fetch('https://api.frankfurter.app/currencies');
      const data = await response.json();
      setCurrencies(data);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  // Convert currency
  const convertCurrency = async () => {
    if (!amount || fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      setRate(1);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await response.json();
      setConvertedAmount(data.rates[toCurrency]);
      setRate(data.rates[toCurrency] / amount);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.error("Error converting currency:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Swap currencies function - THIS WAS MISSING
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Initialize component
  useEffect(() => {
    fetchCurrencies();
    convertCurrency();
  }, []);

  // Convert when inputs change
  useEffect(() => {
    const timer = setTimeout(() => {
      convertCurrency();
    }, 500);
    return () => clearTimeout(timer);
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-indigo-800">Currency Converter</h2>
        <button 
          onClick={() => convertCurrency()}
          disabled={isLoading}
          className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <span className={`inline-block ${isLoading ? 'animate-spin' : ''}`}>
            <RefreshIcon />
          </span>
        </button>
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 pr-16 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="0.00"
            min="0"
            step="0.01"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
            {fromCurrency}
          </div>
        </div>
      </div>

      {/* Currency Selectors */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 mr-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {Object.entries(currencies).map(([code, name]) => (
              <option key={code} value={code}>
                {code} - {name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={swapCurrencies}
          className="p-3 mt-6 bg-indigo-100 hover:bg-indigo-200 rounded-full transition-colors"
          aria-label="Swap currencies"
        >
          <ArrowRightIcon />
        </button>

        <div className="flex-1 ml-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {Object.entries(currencies).map(([code, name]) => (
              <option key={code} value={code}>
                {code} - {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Conversion Result */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <div className="text-sm text-gray-500 mb-1">Converted Amount</div>
        <div className="text-3xl font-bold text-indigo-800 mb-2">
          {isLoading ? (
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
          ) : (
            `${convertedAmount.toFixed(2)} ${toCurrency}`
          )}
        </div>
        <div className="text-sm text-gray-500">
          {!isLoading && rate !== 0 && (
            <span>1 {fromCurrency} = {rate.toFixed(6)} {toCurrency}</span>
          )}
        </div>
      </div>

      {/* Additional Details */}
      <div className="mb-4">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
        >
          <InfoIcon className="mr-1" /> {showDetails ? 'Hide details' : 'Show details'}
        </button>
      </div>

      {showDetails && (
        <div className="bg-white p-4 rounded-xl shadow-sm text-sm text-gray-600">
          <div className="mb-2">
            <span className="font-medium">Last updated:</span> {lastUpdated || 'Never'}
          </div>
          <div>
            <span className="font-medium">Exchange rate:</span> {rate.toFixed(6)}
          </div>
        </div>
      )}

      {/* Historical Rates Link */}
      <div className="text-center mt-6 text-sm text-indigo-600">
        <a href="#" className="hover:underline">View historical rates →</a>
      </div>
    </div>
  );
}

export default CurrencyConverter;