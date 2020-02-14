import React, { Component, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'
import Icon from 'react-web-vector-icons'
import { Link } from 'react-router-dom'
import axios from 'axios';
import SearchSelect from './SearchSelect'
import styles from './component.module.scss'
import LOGO_IMG from '../../../assets/images/profile_header.png'
import defImg from '../../../assets/images/1.jpg'
import { Black_PHONE } from 'common/images'
import fetch from 'cross-fetch'
import { Hidden } from '@material-ui/core'
import CountrySelector from './countrylistpicker.jsx'

function Previews(props) {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
      props.onChange(acceptedFiles)
    }
  })
  const thumbs =
    files.length === 0 ? (
      <div className={styles.thumb}>
        <div className={styles.thumbInner}>
          <img className={styles.img} src={defImg} alt="no_image" />
        </div>
      </div>
    ) : (
        files.map(file => (
          <div className={styles.thumb} key={file.name}>
            <div className={styles.thumbInner}>
              <img src={file.preview} className={styles.img} alt="file_preview" />
            </div>
          </div>
        ))
      )
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <div className={styles.previews}>
      <Link
        side
        className={styles.thumbsContainer}
        style={{ width: '172px' }}
      >
        {thumbs}
      </Link>
      <div
        {...getRootProps({ className: 'dropzone' })}
        className={styles.dragedroppanel} onClick={(e) => props.onChange(e)}
      >
        <div className={styles.pic_drag}>
          {/*<img className="img1" src={BRAND_DEVICE_FOODINI}></img>*/}
        </div>
        <input type="file" accept="image/*" id="image_input" style={{ visibility: 'hidden' }} />
        {/* <input {...getInputProps()} /> */}
        <p>Drag & drop your profile photo here or</p>
      </div>
    </div>
  )
}

const sourceHobbies = [
  { title: 'Sci-Fi' },
  { title: 'Gaming' },
  { title: 'Tech' },
  { title: 'Magazines' }
]
const plaholHobbies = 'Type your interests, Hit comma to add'
const sourceBrands = [
  { title: 'Apple' },
  { title: 'Beko' },
  { title: 'LG' },
  { title: 'Philips' },
  { title: 'Dyson' }
]
const plaholBrands = 'Enter your favourite brands, Hit comma to add'
const genderList = ['Female', 'Male', 'Transgender', "Haven't decide yet"]

export default class SelectProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      hobby: [],
      brands: [],
      categories: [],
      gender: 'Female',
      checklist: [
        'Air Conditioners',
        'Air Flyers',
        'Augmented Reality',
        'Cameras',
        'Desktops',
        'Dish Washers',
        'Drones',
        'Dryers',
        'Electric Cars',
        'Hard Drives',
        'Headphones',
        'Laptops',
        'Microwaves',
        'Monitors',
        'Irons',
        'Speakers',
        'Tablets',
        'Tvs',
        'Toasters',
        'Vacuum Cleaners',
        'VR',
        'Washers',
        'Pressure Cookers',
        'Printers',
        'Projects',
        'Refrigerators',
        'Routers',
        'Smart Glasses',
        'Smartphones',
        'Smartwatches'
      ],
      leftcolum: [],
      middlecolum: [],
      rightcolum: [],

      checkCatego: [],
      checkCatego1: [],
      checkCatego2: [],
      checkCatego3: [],
      file: {}
    }
    this.addCatego = this.addCatego.bind(this)
  }

  componentDidMount() {

    this.reSort()
  }
  componentWillMount() {
    this.reSort()
  }
  reSort() {
    let temp = this.state.checklist.sort()
    this.setState({
      checklist: temp,
      leftcolum: temp.slice(0, 10),
      middlecolum: temp.slice(10, 20),
      rightcolum: temp.slice(20, 30)
    })

    temp = this.state.checkCatego.sort()
    this.setState({
      checkCatego: temp,
      checkCatego1: temp.slice(0, 10),
      checkCatego2: temp.slice(10, 20),
      checkCatego3: temp.slice(20, 30)
    })
  }
  addCatego(item) {
    const newItem = item
    let checklist = this.state.checklist
    let checkCatego = this.state.checkCatego
    // If our input has a value
    if (newItem !== '') {
      // Add the new item to the end of our brandslist array
      var a = checklist.indexOf(newItem)
      checklist.splice(a, 1)
      checkCatego.push(newItem)
      // Then we use that to set the state for brandslist
      this.setState({
        checklist: checklist,
        checkCatego: checkCatego,
        categories: checkCatego
      })

      this.reSort()
      // Finally, we need to reset the form
      //newItem.classList.remove("is-danger");
      //form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add('is-danger')
    }
  }
  removeCatego(item) {
    const newItem = item
    let checkCatego = this.state.checkCatego
    let checklist = this.state.checklist
    // If our input has a value
    if (newItem !== '') {
      // Add the new item to the end of our brandslist array
      var a = checkCatego.indexOf(newItem)
      checkCatego.splice(a, 1)
      checklist.push(newItem)
      // Then we use that to set the state for brandslist
      this.setState({
        checkCatego: checkCatego,
        checklist: checklist,
        categories: checkCatego
      })
      this.reSort()
      // Finally, we need to reset the form
      //newItem.classList.remove("is-danger");
      //form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add('is-danger')
    }
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value })
  }

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value })
  }
  handleOptionChange = (event) => {
    this.setState({ country: event.target.value })
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  onHobbieClickList = (hobbilist) => {

    this.setState({ hobby: hobbilist })
  }
  onBrandClickList = (brandlist) => {
    this.setState({ brands: brandlist })
  }
  onSelectCountry = event =>{
    this.setState({country:event})
  }

  onChange = file => {
    const url = `https://admin.techspecs.io/api/uploadProfileImage`;
    const data = new FormData();
    let user_id = localStorage.getItem('user_id');
    data.append('user_id', user_id);
    console.log(file[0].name);
    let filename=file[0].name;
    data.append(
      'photo',
      file[0],
      filename
    )
    axios.post(url,data)
    .then(res => {
      console.log("responseeee");
      console.log(res.data.image_url);
    })
    .catch(error=>{
      console.log(error);
    });

  }

  onSubmittButton = () => {
    const { firstName, lastName, email, gender, country, hobby, brands, categories } = this.state
    const data = {
      'user_id': localStorage.getItem('user_id'),
      'first_name': firstName,
      'last_name': lastName,
      'email': email,
      'gender': gender,
      'country': country,
      'hobby': hobby,
      'f_brand': brands,
      'f_category': categories,
    }
    console.log(data)
    if (firstName !== '' && lastName !== '' && email !== '' && gender !== '' && country !== '' && hobby !== [] && brands !== [] && categories !== []) {
      const data = {
        'user_id': localStorage.getItem('user_id'),
        'first_name': firstName,
        'last_name': lastName,
        'email': email,
        'gender': gender,
        'country': country,
        'hobby': hobby,
        'f_brand': brands,
        'f_category': categories,
      }

  
    axios.post('https://admin.techspecs.io/api/uploadProfile', { data })
        .then(res => {
          if (!res.data.error) {
             console.log(res.data);
          }
          else {
            console.log("error")
          }
        })
    }
    else {
      console.log("please fill in correctly")
    }

  }
  render() {
    // const { isLoading, value, results } = this.state
    console.log(this.state.country.label);
    return (
      <div>
        <div className={styles.header}>
          <img src={LOGO_IMG} alt="" />
          <p className={styles.headertxt}>
            {' '}
            This is your profile. Fill as much as info that you can so we can use it to <b>create personalised content</b> for you.
          </p>
        </div>
        <p className={styles.smalltitletxt}> Personal Details</p>
        <div className={styles.main}>
          <div className={styles.dragdrop}>
            <p className={styles.text_p}> Profile Image</p>
            <div className={styles.dragdroppreview}>
              <Previews onChange={this.onChange} />
            </div>
          </div>
          <div className={styles.inputdata}>
            <div className="row">
              <div className="col-md-6">
                <p className={styles.text_p}>First name</p>
                <input
                  type="text"
                  id="formGroupExampleInput"
                  className={styles.inptxt}
                  placeholder="Beverly"
                  onChange={this.handleFirstNameChange}
                />
              </div>
              <div className="col-md-6">
                <p className={styles.text_p}>Last name</p>
                <input
                  type="text"
                  className={styles.inptxt}
                  id="formGroupExampleInput"
                  style={{ backgroundColor: '#e9eef2' }}
                  placeholder="Hayes"
                  onChange={this.handleLastNameChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.inputdata}>
            <div className="row">
              <div className="col-md-6">
                <p className={styles.text_p}>Email</p>
                <input
                  type="text"
                  className={styles.inptxt}
                  id="formGroupExampleInput"
                  style={{ backgroundColor: '#e9eef2' }}
                  placeholder="Beverly.hayes@mail.com"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="col-md-6">
                <p className={styles.text_p}>County</p>
                {/* <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" className={styles.inptxt} onChange={this.handleOptionChange}>
                      <option>Singapore</option>
                      <option>China</option>
                      <option>HongKong</option>
                      <option>And So On</option>
                    </Form.Control>
                  </Form.Group>
                </Form> */}
                <CountrySelector onSelectCountry={this.onSelectCountry}/>
              </div>
            </div>
          </div>
          <div className={styles.genderdata}>
            <p className={styles.text_p}>Gender</p>
            <div className={styles.checkdiv}>
              {genderList.map((item, key) => (
                <div
                  key={key}
                  style={{ fontSize: '15px', margin: '10px', display: 'flex' }}
                >
                  <Link onClick={() => this.setState({ gender: item })}>
                    <Icon
                      name={
                        this.state.gender === item
                          ? 'md-radio-button-on'
                          : 'md-radio-button-off'
                      }
                      font="Ionicons"
                      color="#00aaf0"
                      size={23}
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                  <p className={styles.icon_text}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.interest}>
            <p className={styles.text_p}>Your interests, hobbies</p>
            <SearchSelect
              source={sourceHobbies}
              placeholder={plaholHobbies}
              idname="hob"
              onHobbieClickList={this.onHobbieClickList}
              onCheck={true}
            />
          </div>
          <div className={styles.interest}>
            <p className={styles.text_p}>Your favourite brands</p>
            <SearchSelect
              source={sourceBrands}
              placeholder={plaholBrands}
              idname="bra"
              onBrandClickList={this.onBrandClickList}
              onCheck={false}
            />
          </div>
          <div className={styles.categories}>
            <p className={styles.text_p}>Categories that you are interested</p>
            <div className="row">
              <div className="col-sm-5">
                <div className="row">
                  <div className="col-sm">
                    {this.state.leftcolum.map(item => (
                      <div className={styles.categoItem} key={item}>
                        <Link
                          onClick={() => this.addCatego(item)}
                          style={{ cursor: 'pointer', fontSize: '12px' }}
                        >
                          {item} &nbsp;
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="col-sm">
                    {this.state.middlecolum.map(item => (
                      <div className={styles.categoItem} key={item}>
                        <Link
                          onClick={() => this.addCatego(item)}
                          style={{ cursor: 'pointer', fontSize: '12px' }}
                        >
                          {item} &nbsp;
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="col-sm">
                    {this.state.rightcolum.map(item => (
                      <div className={styles.categoItem} key={item}>
                        <Link

                          onClick={() => this.addCatego(item)}
                          style={{ cursor: 'pointer', fontSize: '12px' }}
                        >
                          {item} &nbsp;
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-sm-7">
                <div className={styles.dragcategories}>
                  <div className="row">
                    <div className="col-sm">
                      {this.state.checkCatego1.map(item => (
                        <div className={styles.addItem} key={item}>
                          <p
                            style={{
                              margin: '5px',
                              marginRight: '0px',
                              fontSize: '12px'
                            }}
                          >
                            {item} &nbsp;{' '}
                          </p>
                          <Link

                            onClick={() => this.removeCatego(item)}
                            style={{ margin: '3px', marginLeft: '0px' }}
                          >
                            <Icon
                              name="minuscircle"
                              font="AntDesign"
                              color="#baccd8"
                              size={16}
                              style={{ cursor: 'pointer' }}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="col-sm">
                      {this.state.checkCatego2.map(item => (
                        <div className="addItem" key={item}>
                          <p
                            style={{
                              margin: '5px',
                              marginRight: '0px',
                              fontSize: '12px'
                            }}
                          >
                            {item} &nbsp;{' '}
                          </p>
                          <Link

                            onClick={() => this.removeCatego(item)}
                            style={{ margin: '3px', marginLeft: '0px' }}
                          >
                            <Icon
                              name="minuscircle"
                              font="AntDesign"
                              color="#baccd8"
                              size={16}
                              style={{ cursor: 'pointer' }}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="col-sm">
                      {this.state.checkCatego3.map(item => (
                        <div className={styles.addItem} key={item}>
                          <p
                            style={{
                              margin: '5px',
                              marginRight: '0px',
                              fontSize: '12px'
                            }}
                          >
                            {item} &nbsp;{' '}
                          </p>
                          <Link

                            onClick={() => this.removeCatego(item)}
                            style={{ margin: '3px', marginLeft: '0px' }}
                          >
                            <Icon
                              name="minuscircle"
                              font="AntDesign"
                              color="#baccd8"
                              size={16}
                              style={{ cursor: 'pointer' }}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.submitbnt}>
            <button className={styles.savebnt} onClick={this.onSubmittButton}>Save Changes</button>
            <button className={styles.revertbnt} onClick={this.onRevertButton}>Revert Changes</button>
          </div>
        </div>
      </div>
    )
  }
}
