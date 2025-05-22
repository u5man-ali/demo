import './App.css'
import Button from './components/button'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">DC Ultimate UI Kit - Live Preview</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button label="Primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Disabled" disabled />
        </div>
      </section>
      {/* Place your components here */}
    </div>
  )
}

export default App
