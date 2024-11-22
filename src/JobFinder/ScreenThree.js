import { IoMdClose } from "react-icons/io";
import { Pencil, MoreVertical } from "lucide-react";
import { AppRoot, Section, Text, Avatar, Cell } from '@telegram-apps/telegram-ui';
import profileImage from '../Icons/profile.png';
import QA from '../Icons/QA.png';
import manual from '../Icons/manual.png'
import manual2 from '../Icons/manual2.png'


const ScreenThree = () => {
  const userProfile = {
    name: "Jane",
    memberSince: "Member since Jan 2021",
    tags: ["QA Engineer", "Willing to relocate", "London"],
    applications: [
      {
        title: "QA Engineer",
        company: "Wallet",
        appliedDate: "Applied yesterday",
        icon: QA
      },
      {
        title: "QA Engineer (Manual)",
        company: "The Open Platform",
        appliedDate: "Applied yesterday",
        icon: manual
      },
      {
        title: "QA Engineer (Manual)",
        company: "Tonkeeper",
        appliedDate: "Applied 2 days ago",
        icon: manual2
      }
    ]
  };

  return (
    <AppRoot>
      <Section
        header={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '0.5px solid rgba(204, 204, 204, 0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', marginBottom: '12px' }}>
                <IoMdClose size={20} style={{ marginLeft: '16px' }} />
                <Text variant="headline" style={{ fontSize: '20px', fontWeight: '600', marginLeft: '22px' }}>Job Finder</Text>
              </div>
              <MoreVertical size={20} style={{ marginRight: '16px' }} />
            </div>
          </div>
        }
      >
        <div style={{ padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems:'center' }}>
              <Avatar
                src={profileImage}
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%'
                }}
              />
              <div style={{display:'flex', flexDirection:'column'}}>
                <Text style={{ fontSize: '22px', fontWeight: '600' }}>{userProfile.name}</Text>
                <Text style={{ color: '#707579', fontSize:'15px' }}>{userProfile.memberSince}</Text>
              </div>
            </div>
            <Pencil size={24} style={{ color: '#2990FF', marginTop:'36px' }} />
            
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {userProfile.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  background: 'var(--tgui--secondary_bg_color)',
                  padding: '12px 12px',
                  borderRadius: '8px',
                  fontSize: '17px',
                  fontWeight:'600'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <div style={{ background: 'var(--tgui--secondary_bg_color)', height: '12px' }} />

      <Section
        header={
          <div style={{ padding: '20px 24px 16px' }}>
            <Text style={{ fontSize: '18px', fontWeight: '600' }}>Current applications</Text>
          </div>
        }
      >
        {userProfile.applications.map((application, index) => (
          <Cell
            key={index}
            style={{ marginTop: '-12px' }}
            before={
              <Avatar
                src={application.icon}
                style={{
                  borderRadius: '12px',
                  width: '48px',
                  height: '48px'
                }}
              />
            }
            description={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text>{application.company}</Text>
                <Text style={{ color: 'var(--tgui--text-secondary)' }}>{application.appliedDate}</Text>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '89px',
                    right: '0',
                    borderBottom: '0.5px solid rgba(204, 204, 204, 0.5)',
                  }}
                />
              </div>
            }
          >
            {application.title}
          </Cell>
        ))}
      </Section>
      <div style={{ background: 'var(--tgui--secondary_bg_color)', height: '188px' }} />

    </AppRoot>
  );
};

export default ScreenThree;