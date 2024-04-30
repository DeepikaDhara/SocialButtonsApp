const Button = props => {
  const {cls, content} = props
  return <button className={className}>{content}</button>
}

const element = (
  <div className='social-btn-bg'>
    <h1 className='social-btn-heading'>Social Buttons</h1>
    <div>
      <Button className='social-btn-like' content='like'></Button>
      <Button className='social-btn-comment' content='Comment'></Button>
      <Button className='social-btn-share' content='Share'></Button>
    </div>
  </div>
)
ReactDOM.render(element, document.getElementById('root'))
