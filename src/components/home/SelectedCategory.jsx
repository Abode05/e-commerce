/* eslint-disable react/prop-types */
const SelectedCategory = ({ select, onChange }) => {
  return (
 
      <select
        className="bg-[#E4CCC9]  relative  text-lg font-semibold  p-2  md:rounded-l-full text-center cursor-pointer border-none"
        value={select}
        onChange={onChange}
      >
        <option value="all">All Categories</option>
        <option value="Men's Sneaker">Men Sneaker</option>
        <option value="computer">Computer</option>
        <option value="smart-home">Smart Home</option>
        <option value="automotive">Automotive</option>
        <option value="baby">Baby</option>
        <option value="beauty">Beauty</option>
        <option value="personal-care">Personal Care</option>
        <option value="butcher-shop">Butcher Shop</option>
        <option value="cafe">Cafe</option>

        <option value="college">College</option>

        <option value="corporate">Corporate</option>
        <option value="covid19">Covid19</option>
        <option value="digital-products">Digital Products</option>

        <option value="education">Education</option>
        <option value="entertainment">Entertainment</option>
        <option value="environment">Environment</option>

        <option value="events">Events</option>
        <option value="fitness">Fitness</option>
        <option value="food-shop">Food Shop</option>
        <option value="free">Free</option>
        <option value="gym">Gym</option>
        <option value="halloween">Halloween</option>

        <option value="medical">Medical</option>
        <option value="medical-prevention">Medical Prevention</option>
        <option value="meetup">Meetup</option>
        <option value="mobile-apps">Mobile Apps</option>
        <option value="music">Music</option>
        <option value="news">News</option>

        <option value="personal-blog">Personal Blog</option>

        <option value="restaurants">Restaurants</option>
        <option value="school">School</option>
        <option value="seo">SEO</option>
        <option value="software">Software</option>
        <option value="startups">Startups</option>
        <option value="university">University</option>

        <option value="Shoes">Shoes</option>
        <option value="yoga">Yoga</option>
      </select>

  )
}

export default SelectedCategory
