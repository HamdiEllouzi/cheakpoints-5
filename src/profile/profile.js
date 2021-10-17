import PropTypes from "prop-types";
const imgStyle = {display: 'flex', flexDirection:"column" ,alignItems: "center"}
const Profile = ({fullName,children,handleName}) =>{
    return <div style={imgStyle}>{children}
                <button onClick={()=>handleName(fullName)}>click me</button>
            </div> }
export default Profile;
Profile.defaultProps = {
    fullName: "aymen",
    handleName: ()=>{alert("function is missing !!!!")},
    children: <div><img src="" alt="not found"/></div>
};
Profile.propTypes = {
    fullName: PropTypes.string,
    handleName: PropTypes.func,
    children: PropTypes.element
};