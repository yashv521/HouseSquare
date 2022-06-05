import heart from '../assets/jpg/heart.png'
import github from '../assets/svg/github.svg'


function aboutMe() {

  


  const onGithubclick = (e) => {

    window.open("https://github.com/yashv521", '_blank');
  
  }

  return (
    <div className="pageHeader">
      <h4 className='registerLink2'>About This Project</h4>
    <p className="exploreCategoryName1">
    This is a React app for Listing Your houses for Rent and sale for a product or service
    </p>
    <p className='exploreCategoryName2'>Created with<img src={heart} alt="heart" className='heart1'  /> By Me Your Lad Yash a.k.a Insaneyashu </p>
    <div className='socialLogin'>
    <button className="socialIconDiv1" onClick={onGithubclick} >
          <img className='socialIconImg' src={github} alt="github" />
      </button>
    </div>
   
    <p className='registerLink1'>Version: 1.0.0</p>
    </div>
    
    
  )
}

export default aboutMe
