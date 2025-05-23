import './App.css'
import Button from './components/button'
import IconLeft from './icons/Placeholder-Outline.svg?react'
import IconRight from './icons/Arrow-Enter-Left-Outline.svg?react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">DC Ultimate UI Kit - Live Preview</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Button with both icons</h2>
        <div className="flex gap-4 flex-wrap">
          {/*Show both icons */}
          <Button
            size="md"
            variant="primary"
            leftIcon={IconLeft}
            rightIcon={IconRight}
          >
          With Icons
          </Button></div>
          <h2 className="text-2xl font-semibold mb-4">Button with only right side icon</h2>
          <div>
          {/*Show right icon only */}
          <Button
            size="md"
            variant="secondary"
            showLeftIcon={false}
            leftIcon={IconLeft}
            showRightIcon={true}
            rightIcon={IconRight}            
          >
          Right Only
          </Button></div>
          <h2 className="text-2xl font-semibold mb-4">Button with only left side icon</h2>
          <div>
          {/*Show left icon only */}
          <Button
            size="md"
            variant="success"
            showLeftIcon={true}
            leftIcon={IconLeft}
            showRightIcon={false}
            rightIcon={IconRight}
          >
          Left Only
          </Button></div>
          <h2 className="text-2xl font-semibold mb-4">Button without any icons</h2>
          <div>
          {/* Hide both icons */}
          <Button
            size="md"
            variant="neutral"
            showLeftIcon={false}
            leftIcon={IconLeft}
            showRightIcon={false}
            rightIcon={IconRight}            
          >
          No Icons
          </Button>
        </div>
      </section>
      {/* Place your components here */}
    </div>
  )
}

export default App
