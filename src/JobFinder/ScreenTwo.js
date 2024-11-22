import { ArrowLeft, MoreVertical } from "lucide-react";
import { IoMdClose } from "react-icons/io";
import { AppRoot, Section, Text, Button, Cell, Avatar } from '@telegram-apps/telegram-ui';
import image from '../Icons/image.png';

const ScreenTwo = () => {
  const jobDetails = {
    title: "Campaign Manager",
    company: "TON Foundation",
    postedDate: "Posted on Dec 12",
    tags: ["Onsite", "Full-time", "Equal opportunity"],
    category: "Marketing & Communications",
    description: "TON Foundation seeks an experienced digital marketer and project manager for this cross-functional role in the Marketing Operations team, reporting directly to the CMO.",
    icon: image
  };

  const morePositions = [
    {
      title: "Video Production Lead",
      type: "Full-time",
      location: "Onsite"
    },
    {
      title: "Growth Marketing Lead",
      type: "Full-time",
      location: "Remote"
    },
    {
      title: "QA Engineer",
      type: "Full-time",
      location: "Remote"
    }
  ];

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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', marginBottom: '14px' }}>
                <IoMdClose size={20} style={{ marginLeft: '16px' }} />
                <Text variant="headline" style={{ fontSize: '20px', fontWeight: '600', marginLeft: '22px' }}>Job Finder</Text>
              </div>
              <MoreVertical size={20} style={{ marginRight: '16px' }} />
            </div>
          </div>
        }
      >
        <div style={{ padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Avatar 
              src={jobDetails.icon}
              style={{
                borderRadius: '0',
                width: '72px',
                height: '72px',
                border: 'none',
                boxShadow: 'none',
                backgroundColor: 'transparent'
              }}
            />
            <div style={{display:'flex', flexDirection:'column'}}>
              <Text style={{ fontSize: '22px', fontWeight: '600' }}>{jobDetails.title}</Text>
              <Text style={{ color: '#2990FF', fontSize: '17px', fontWeight: '600', paddingTop:'2px', paddingBottom:'2px' }}>{jobDetails.company}</Text>
              <Text style={{ color: '#A2ACB0', fontSize: '16px' }}>{jobDetails.postedDate}</Text>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            {jobDetails.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  background: 'var(--tgui--secondary_bg_color)',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  fontSize: '17px',
                  fontWeight: '600',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', marginBottom: '16px' }}>
            <Text style={{ background: 'var(--tgui--secondary_bg_color)',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  fontSize: '17px',
                  fontWeight: '600',
                   }}>
                {jobDetails.category}</Text>
          </div>

          <Text style={{ fontSize: '17px', lineHeight: '1.5', color:'#AAA' }}>{jobDetails.description}</Text>

          <Button
            size="l"
            style={{
              width: '100%',
              marginTop: '28px',
              background: '#007AFF',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '2px',
              marginBottom:'12px'
            }}
          >
            Apply
          </Button>
        </div>
      </Section>

      <div style={{ background: 'var(--tgui--secondary_bg_color)', height: '12px' }} />

      <Section
        header={
          <div style={{ padding: '24px 24px 16px' }}>
            <Text style={{ fontSize: '18px', fontWeight: '600' }}>More positions at TON Foundation</Text>
          </div>
        }
      >
        {morePositions.map((position, index) => (
          <Cell
            key={index}
            style={{ marginTop: '-12px', paddingTop:'5px'}}
            description={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text>{position.type}</Text>
                <Text>{position.location}</Text>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '24px',
                    right: '0',
                    // borderBottom: '0.5px solid rgba(204, 204, 204, 0.5)',
                  }}
                />
              </div>
            }
          >
            <Text style={{fontSize:'17px'}}>{position.title}</Text>
          </Cell>
        ))}
      </Section>
    </AppRoot>
  );
};

export default ScreenTwo;