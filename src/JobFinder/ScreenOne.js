import { ArrowLeft, MoreVertical, ChevronDown } from "lucide-react";
import { useState } from "react";
import PropTypes from 'prop-types';
import { AppRoot, FixedLayout, IconButton, Cell, Avatar, List, Button, Section, Text } from '@telegram-apps/telegram-ui';
import image from '../Icons/image.png';
import image2 from '../Icons/image2.png';
import image3 from '../Icons/image3.png';
import { IoMdClose } from "react-icons/io";
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";

const ScreenOne = () => {

  const jobs = [
    {
      icon: image,
      title: "Campaign Manager",
      company: "TON Foundation",
      location: "Onsite"
    },
    {
      icon: image2,
      title: "Customer Support Specialist",
      company: "Wallet",
      location: "Remote"
    },
    {
      icon: image3,
      title: "Project Manager",
      company: "The Open Platform",
      location: "Remote"
    }
  ];

  const companies = [
    {
      icon: image,
      name: "TON Foundation",
      location: "Dubai"
    },
    {
      icon: image2,
      name: "Wallet",
      location: "Dubai"
    },
    {
      icon: image3,
      name: "The Open Platform",
      location: "Dubai"
    }
  ];

  const faqs = [
    {
      icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7876 4.5H14.2124C15.8157 4.49999 17.0776 4.49999 18.0996 4.57868C19.1434 4.65904 20.0142 4.8256 20.82 5.19935C22.1472 5.81501 23.2591 6.80193 24.0199 8.03437C24.4804 8.78042 24.742 9.61261 24.9371 10.6269C25.1285 11.6218 25.2676 12.8619 25.4449 14.4419L25.9761 19.176C26.0352 19.703 25.9845 20.2365 25.8269 20.7439C24.8227 23.9757 20.3804 24.5112 18.6339 21.571L17.0103 18.8375C16.9591 18.7513 16.8732 18.7086 16.7917 18.7086H11.2083C11.1268 18.7086 11.0409 18.7514 10.9897 18.8375L9.36608 21.571C7.61962 24.5112 3.17728 23.9757 2.17313 20.7439C2.01549 20.2365 1.96481 19.703 2.02393 19.176L2.55509 14.4419C2.73235 12.8619 2.87149 11.6218 3.06288 10.6269C3.25799 9.61261 3.51956 8.78042 3.9801 8.03437C4.74088 6.80193 5.85277 5.81501 7.18005 5.19935C7.98581 4.8256 8.85658 4.65904 9.90037 4.57868C10.9224 4.49999 12.1843 4.49999 13.7876 4.5ZM10.0572 6.49392C9.13568 6.56488 8.53443 6.70096 8.03529 6.93249C7.0636 7.38321 6.2438 8.10847 5.68048 9.02103C5.38945 9.49249 5.18473 10.0757 5.01094 10.9791C4.83501 11.8937 4.70334 13.0612 4.5207 14.6891L3.99396 19.3837C3.96353 19.655 3.98969 19.9294 4.07056 20.1897C4.58158 21.8344 6.78307 22.0697 7.64884 20.6121L9.27247 17.8787C9.67037 17.2088 10.4041 16.7873 11.2083 16.7873H16.7917C17.5959 16.7873 18.3296 17.2088 18.7275 17.8787L20.3512 20.6121C21.2169 22.0697 23.4184 21.8344 23.9294 20.1897C24.0103 19.9294 24.0365 19.655 24.006 19.3837L23.4793 14.6891C23.2967 13.0612 23.165 11.8937 22.9891 10.9791C22.8153 10.0757 22.6106 9.49249 22.3195 9.02103C21.7562 8.10847 20.9364 7.38321 19.9647 6.93249C19.4656 6.70096 18.8643 6.56488 17.9428 6.49392C17.0084 6.42198 15.8249 6.42128 14.17 6.42128H13.83C12.1751 6.42128 10.9916 6.42198 10.0572 6.49392ZM9.95405 9.30809C10.5013 9.30809 10.9449 9.73818 10.9449 10.2687V10.9108H11.5724C12.1196 10.9108 12.5633 11.3409 12.5633 11.8714C12.5633 12.402 12.1196 12.8321 11.5724 12.8321H10.9449V13.4741C10.9449 14.0047 10.5013 14.4348 9.95405 14.4348C9.40683 14.4348 8.96322 14.0047 8.96322 13.4741V12.8321H8.33567C7.78845 12.8321 7.34484 12.402 7.34484 11.8714C7.34484 11.3409 7.78845 10.9108 8.33567 10.9108H8.96322V10.2687C8.96322 9.73818 9.40683 9.30809 9.95405 9.30809Z" fill="#007AFF"/>
        <path d="M19.3945 9.67677C19.3945 10.2368 18.9262 10.6908 18.3486 10.6908C17.771 10.6908 17.3028 10.2368 17.3028 9.67677C17.3028 9.11675 17.771 8.66276 18.3486 8.66276C18.9262 8.66276 19.3945 9.11675 19.3945 9.67677Z" fill="#007AFF"/>
        <path d="M21.5963 11.8115C21.5963 12.3715 21.1281 12.8255 20.5505 12.8255C19.9728 12.8255 19.5046 12.3715 19.5046 11.8115C19.5046 11.2515 19.9728 10.7975 20.5505 10.7975C21.1281 10.7975 21.5963 11.2515 21.5963 11.8115Z" fill="#007AFF"/>
        <path d="M17.1927 11.8115C17.1927 12.3715 16.7244 12.8255 16.1468 12.8255C15.5692 12.8255 15.1009 12.3715 15.1009 11.8115C15.1009 11.2515 15.5692 10.7975 16.1468 10.7975C16.7244 10.7975 17.1927 11.2515 17.1927 11.8115Z" fill="#007AFF"/>
        <path d="M19.3945 13.9463C19.3945 14.5063 18.9262 14.9603 18.3486 14.9603C17.771 14.9603 17.3028 14.5063 17.3028 13.9463C17.3028 13.3863 17.771 12.9323 18.3486 12.9323C18.9262 12.9323 19.3945 13.3863 19.3945 13.9463Z" fill="#007AFF"/>
        </svg>
        ),
      question: "How to correctly apply for a position?"
    },
    {
      icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7876 4.5H14.2124C15.8157 4.49999 17.0776 4.49999 18.0996 4.57868C19.1434 4.65904 20.0142 4.8256 20.82 5.19935C22.1472 5.81501 23.2591 6.80193 24.0199 8.03437C24.4804 8.78042 24.742 9.61261 24.9371 10.6269C25.1285 11.6218 25.2676 12.8619 25.4449 14.4419L25.9761 19.176C26.0352 19.703 25.9845 20.2365 25.8269 20.7439C24.8227 23.9757 20.3804 24.5112 18.6339 21.571L17.0103 18.8375C16.9591 18.7513 16.8732 18.7086 16.7917 18.7086H11.2083C11.1268 18.7086 11.0409 18.7514 10.9897 18.8375L9.36608 21.571C7.61962 24.5112 3.17728 23.9757 2.17313 20.7439C2.01549 20.2365 1.96481 19.703 2.02393 19.176L2.55509 14.4419C2.73235 12.8619 2.87149 11.6218 3.06288 10.6269C3.25799 9.61261 3.51956 8.78042 3.9801 8.03437C4.74088 6.80193 5.85277 5.81501 7.18005 5.19935C7.98581 4.8256 8.85658 4.65904 9.90037 4.57868C10.9224 4.49999 12.1843 4.49999 13.7876 4.5ZM10.0572 6.49392C9.13568 6.56488 8.53443 6.70096 8.03529 6.93249C7.0636 7.38321 6.2438 8.10847 5.68048 9.02103C5.38945 9.49249 5.18473 10.0757 5.01094 10.9791C4.83501 11.8937 4.70334 13.0612 4.5207 14.6891L3.99396 19.3837C3.96353 19.655 3.98969 19.9294 4.07056 20.1897C4.58158 21.8344 6.78307 22.0697 7.64884 20.6121L9.27247 17.8787C9.67037 17.2088 10.4041 16.7873 11.2083 16.7873H16.7917C17.5959 16.7873 18.3296 17.2088 18.7275 17.8787L20.3512 20.6121C21.2169 22.0697 23.4184 21.8344 23.9294 20.1897C24.0103 19.9294 24.0365 19.655 24.006 19.3837L23.4793 14.6891C23.2967 13.0612 23.165 11.8937 22.9891 10.9791C22.8153 10.0757 22.6106 9.49249 22.3195 9.02103C21.7562 8.10847 20.9364 7.38321 19.9647 6.93249C19.4656 6.70096 18.8643 6.56488 17.9428 6.49392C17.0084 6.42198 15.8249 6.42128 14.17 6.42128H13.83C12.1751 6.42128 10.9916 6.42198 10.0572 6.49392ZM9.95405 9.30809C10.5013 9.30809 10.9449 9.73818 10.9449 10.2687V10.9108H11.5724C12.1196 10.9108 12.5633 11.3409 12.5633 11.8714C12.5633 12.402 12.1196 12.8321 11.5724 12.8321H10.9449V13.4741C10.9449 14.0047 10.5013 14.4348 9.95405 14.4348C9.40683 14.4348 8.96322 14.0047 8.96322 13.4741V12.8321H8.33567C7.78845 12.8321 7.34484 12.402 7.34484 11.8714C7.34484 11.3409 7.78845 10.9108 8.33567 10.9108H8.96322V10.2687C8.96322 9.73818 9.40683 9.30809 9.95405 9.30809Z" fill="#007AFF"/>
        <path d="M19.3945 9.67677C19.3945 10.2368 18.9262 10.6908 18.3486 10.6908C17.771 10.6908 17.3028 10.2368 17.3028 9.67677C17.3028 9.11675 17.771 8.66276 18.3486 8.66276C18.9262 8.66276 19.3945 9.11675 19.3945 9.67677Z" fill="#007AFF"/>
        <path d="M21.5963 11.8115C21.5963 12.3715 21.1281 12.8255 20.5505 12.8255C19.9728 12.8255 19.5046 12.3715 19.5046 11.8115C19.5046 11.2515 19.9728 10.7975 20.5505 10.7975C21.1281 10.7975 21.5963 11.2515 21.5963 11.8115Z" fill="#007AFF"/>
        <path d="M17.1927 11.8115C17.1927 12.3715 16.7244 12.8255 16.1468 12.8255C15.5692 12.8255 15.1009 12.3715 15.1009 11.8115C15.1009 11.2515 15.5692 10.7975 16.1468 10.7975C16.7244 10.7975 17.1927 11.2515 17.1927 11.8115Z" fill="#007AFF"/>
        <path d="M19.3945 13.9463C19.3945 14.5063 18.9262 14.9603 18.3486 14.9603C17.771 14.9603 17.3028 14.5063 17.3028 13.9463C17.3028 13.3863 17.771 12.9323 18.3486 12.9323C18.9262 12.9323 19.3945 13.3863 19.3945 13.9463Z" fill="#007AFF"/>
        </svg>
        ),
      question: "Can I add my own job place?"
    }
  ];

  return (
    <AppRoot>
      {/* Custom Header */}
      {/* <SectionHeader>
        <FixedLayout
          vertical="top"
          style={{
            backgroundColor: 'var(--background-primary)', // Dynamically adapt to theme
            color: 'var(--text-primary)', // Adapt text color to theme
            padding: '14px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}> 
              <IconButton mode="plain">
                <IoMdClose size={20} />
              </IconButton>
              <Text variant="headline" style={{ fontWeight: 'bold' }}>Job Finder</Text>
            </div>
            <IconButton mode="plain">
              <MoreVertical size={20} />
            </IconButton>
          </div>
        </FixedLayout>
      </SectionHeader> */}
      
      <Section
          header=
          {
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '0.5px solid rgba(204, 204, 204, 0.5)', // Adds the grey border
                
              }}
            >
          {
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' , marginTop:'8px', marginBottom:'7px'}}> 
              <IconButton mode="plain" style={{ color: 'inherit' }}>
                <IoMdClose size={20} />
              </IconButton>
              <Text variant="headline" style={{fontSize:'20px', fontWeight: '600', marginLeft:'22px' }}>Job Finder</Text>
            </div>
            <IconButton mode="plain" style={{ color: 'inherit' }}>
              <MoreVertical size={20} />
            </IconButton>
          </div>
          }
          </div>
          }
        ></Section>

      {/* Recommended Section */}
      <div >
        <Section
          header={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px',  marginBottom:'16px'  }}>
              <span style={{fontSize:'18px', fontWeight: '600', paddingLeft: '24px' }}>Recommended for you</span>
              <span style={{ color: "#2990FF", cursor: 'pointer', fontWeight: '600', paddingRight: '24px' }}>See all</span>
            </div>
          }
        >

          <List style={{ marginTop: '5px' }}>
            {jobs.map((job, index) => (
              <Cell style={{marginTop:'-12px'}}
                key={index}
                before={<Avatar src={job.icon}
                  style={{
                    borderRadius: '0', // Makes the avatar square
                    width: '48px', // Adjust as needed
                    height: '48px', // Adjust as needed
                    border: 'none', // Removes any border
                    boxShadow: 'none', // Removes any shadow
                    backgroundColor: 'transparent' // Removes any background color
                  }}
                />}
                description={
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      // borderBottom: '0.5px solid grey', // Adds the grey border
                      
                    }}
                  >
                
                <span>{job.company}</span>
                <span>{job.location}</span>
                <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '89px',
                      right: '0', // Extends the border to the right
                      borderBottom: '0.5px solid rgba(204, 204, 204, 0.5)',
                    }}
                  ></div>
                </div>
          }

              // after={<Button>Apply</Button>}
              >
                {job.title}
              </Cell>
            ))}
          </List>
        </Section>

      </div>
      <div style={{background: 'var(--tgui--secondary_bg_color)', paddingBottom:'12px'}}></div>


      {/* Companies Section */}
      <Section
        header={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', marginBottom:'16px'  }}>
            <span style={{fontSize:'18px',  fontWeight: '600', paddingLeft: '24px' }}>Explore Companies</span>
            {/* <span style={{ color: "#2990FF", cursor: 'pointer',fontWeight: 'bold', paddingRight:'24px' }}>See all</span> */}
          </div>
        }
      >
        {/* <Text variant="subheadline" style={{ marginBottom: '8px' }}>Explore Companies</Text> */}
        <List>
          {companies.map((company, index) => (
            <Cell style={{marginTop:'-12px'}}
              key={index}
              before={<Avatar src={company.icon}
                style={{
                  borderRadius: '0', // Makes the avatar square
                  width: '48px', // Adjust as needed
                  height: '48px', // Adjust as needed
                  border: 'none', // Removes any border
                  boxShadow: 'none', // Removes any shadow
                  backgroundColor: 'transparent' // Removes any background color
                }}
              />}
              description={
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // borderBottom: '0.5px solid grey', // Adds the grey border
                    
                  }}
                >
              
              {company.location}
              <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '89px',
                      right: '0', // Extends the border to the right
                      borderBottom: '0.5px solid rgba(204, 204, 204, 0.5)',
                    }}
                  ></div>
              </div>
          }
            >
              {company.name}
            </Cell>
          ))}
        </List>
      </Section>

      <div style={{background: 'var(--tgui--secondary_bg_color)', paddingBottom:'12px'}}></div>

      {/* FAQ Section */}
      <Section
        header={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', marginBottom:'10px' }}>
            <span style={{fontSize:'18px', fontWeight: '600', paddingLeft: '24px' }}>FAQ</span>
            {/* <span style={{ color: "#2990FF", cursor: 'pointer',fontWeight: 'bold', paddingRight:'24px' }}>See all</span> */}
          </div>
        }
      >
        {/* <Text variant="subheadline" style={{ marginBottom: '8px' }}>FAQ</Text> */}
        <List>
          {faqs.map((faq, index) => (
            <Cell style={{marginTop:'-12px', display:'flex', alignItems:'center'}}
              key={index}
              before={<span>{faq.icon}</span>}
              description={
                <div style={{ display: 'flex', alignItems: 'center'}}>
                  <span style={{ fontSize:'17px', flexGrow: 1 }}>{faq.question}</span>
                  <div>
                    <ChevronDown style={{ color: "#2990FF" }} />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '72px',
                      right: '0', // Extends the border to the right
                      borderBottom: '0.5px solid rgba(204, 204, 204, 0.5)',
                    }}
                  ></div>
                </div>
              }
              
            />
          ))}
        </List>
      </Section>
    </AppRoot>
  );
};

ScreenOne.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      company: PropTypes.string,
      location: PropTypes.string
    })
  ),
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      name: PropTypes.string,
      location: PropTypes.string
    })
  ),
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      question: PropTypes.string
    })
  )
};

export default ScreenOne;
