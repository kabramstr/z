import React, { useState } from 'react';
import { CheckCircle, CreditCard, DollarSign } from 'lucide-react';

const DonationSection: React.FC = () => {
  const [amount, setAmount] = useState<number | string>(50);
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  const presetAmounts = [25, 50, 100, 250];
  
  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setIsCustomAmount(false);
  };
  
  const handleCustomAmountClick = () => {
    setAmount('');
    setIsCustomAmount(true);
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setAmount(value === '' ? '' : parseInt(value, 10));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    console.log({
      amount,
      name: isAnonymous ? 'Anonymous' : name,
      email,
      message,
      isAnonymous
    });
    
    alert('Thank you for your donation! This is a demo - no actual payment has been processed.');
  };
  
  return (
    <section id="donate" className="section bg-primary-200">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Support Our Playground</h2>
          <p className="text-primary-800 text-lg">
            Your contribution will help us create a vibrant playground where children can thrive. Every donation brings us closer to our goal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-xl p-8 shadow-md reveal">
            <h3 className="text-2xl font-semibold text-primary-900 mb-6">Make a Donation</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-primary-800 font-medium mb-3">Choose an amount</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  {presetAmounts.map((presetAmount) => (
                    <button
                      key={presetAmount}
                      type="button"
                      className={`p-3 rounded-lg border-2 transition-all ${
                        amount === presetAmount && !isCustomAmount
                          ? 'border-primary-700 bg-primary-700 text-white'
                          : 'border-primary-300 text-primary-800 hover:border-primary-600'
                      }`}
                      onClick={() => handleAmountSelect(presetAmount)}
                    >
                      ${presetAmount}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <button
                    type="button"
                    className={`p-3 rounded-lg border-2 transition-all w-full ${
                      isCustomAmount
                        ? 'border-primary-700 bg-primary-700 text-white'
                        : 'border-primary-300 text-primary-800 hover:border-primary-600'
                    }`}
                    onClick={handleCustomAmountClick}
                  >
                    Custom Amount
                  </button>
                  
                  {isCustomAmount && (
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-800">
                        <DollarSign className="h-5 w-5" />
                      </span>
                      <input
                        type="text"
                        value={amount}
                        onChange={handleCustomAmountChange}
                        className="input pl-10 w-full"
                        placeholder="Amount"
                        autoFocus
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-primary-800 font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isAnonymous}
                    required={!isAnonymous}
                  />
                </div>
                
                <div>
                  <label className="block text-primary-800 font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-primary-800 font-medium mb-2" htmlFor="message">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="input w-full"
                    placeholder="Share why you're supporting our playground"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="anonymous"
                    className="mr-2 h-4 w-4 accent-primary-700"
                    checked={isAnonymous}
                    onChange={() => setIsAnonymous(!isAnonymous)}
                  />
                  <label htmlFor="anonymous" className="text-primary-800">
                    Make my donation anonymous
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full flex justify-center items-center gap-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>Donate ${typeof amount === 'string' && amount === '' ? '0' : amount}</span>
              </button>
            </form>
          </div>
          
          <div className="lg:pl-8 reveal">
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">How Your Donation Helps</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-700 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary-900">$25 provides</p>
                    <p className="text-primary-800">Safety mulch for the playground surface</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-700 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary-900">$50 provides</p>
                    <p className="text-primary-800">A sensory play panel for children with special needs</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-700 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary-900">$100 provides</p>
                    <p className="text-primary-800">A wheelchair-accessible swing set station</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-700 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary-900">$250 provides</p>
                    <p className="text-primary-800">A complete climbing structure for physical development</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-800 rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Other Ways to Help</h3>
              <p className="mb-4">
                Beyond financial contributions, you can support our playground project by:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                  <span>Sharing our cause with friends and family</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                  <span>Volunteering during community build days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                  <span>Donating materials or services</span>
                </li>
              </ul>
              <a href="#contact" className="btn btn-secondary">Get Involved</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;