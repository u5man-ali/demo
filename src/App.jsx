import './App.css'
import Button from './components/button'
import leftIcon from './icons/Placeholder-Outline.svg?react'
import rightIcon from './icons/Arrow-Enter-Left-Outline.svg?react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">DC Ultimate UI Kit - Live Preview</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          {/*Show both icons */}
          <Button
            size="md"
            variant="primary"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          >
          With Icons
          </Button>
          {/*Show right icon only */}
          <Button
            size="md"
            variant="secondary"
            showLeftIcon={false}
            leftIcon={leftIcon}
            showRightIcon={true}
            rightIcon={rightIcon}            
          >
          Right Only
          </Button>
          {/*Show left icon only */}
          <Button
            size="md"
            variant="success"
            showLeftIcon={true}
            leftIcon={leftIcon}
            showRightIcon={false}
            rightIcon={rightIcon}
          >
          Left Only
          </Button>
          {/* Hide both icons */}
          <Button
            size="md"
            variant="neutral"
            showLeftIcon={false}
            leftIcon={leftIcon}
            showRightIcon={false}
            rightIcon={righIcon}            
          >
          No Icons
          </Button>
          <Button label="Secondary" variant="secondary" />
          <Button label="Disabled" disabled />
        </div>
      </section>
      {/* Place your components here */}
    </div>
  )
}

export default App
