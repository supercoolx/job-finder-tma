import { AppRoot, Section, Text, IconButton, Avatar, Input, Button, Cell, FileInput } from '@telegram-apps/telegram-ui';
import { IoMdClose } from "react-icons/io";
import { MoreVertical } from "lucide-react";
import image from '../Icons/image.png';
import pdf from '../Icons/pdf.png';
import { SectionHeader } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader";
import { SectionFooter } from "@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionFooter/SectionFooter";

const ScreenFour = () => {
  return (
    <AppRoot>
      {/* Header Section */}
      <Section
        header={
          <div style={{
            position: 'sticky',
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '0.5px solid rgba(204, 204, 204, 0.5)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', marginBottom: '12px' }}>
                <IconButton mode="plain" style={{ color: 'inherit' }}>
                  <IoMdClose size={20} />
                </IconButton>
                <Text style={{ fontSize: '20px', fontWeight: '600', marginLeft: '22px' }}>Job Finder</Text>
              </div>
              <IconButton mode="plain" style={{ color: 'inherit' }}>
                <MoreVertical size={20} />
              </IconButton>
            </div>
          </div>
        }>

        </Section>


      {/* Job Title Section */}
      <Section>
        <div style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', gap: '12px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px'
          }}>
            <Avatar
              src={image}
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '14px' }}>
            <Text style={{ fontSize: '20px', fontWeight: '600' }}>Campaign Manager</Text>
            <Text style={{ color: '#007AFF', fontSize: '17px', fontWeight: '600' }}>TON Foundation</Text>
          </div>
        </div>
      </Section>

      <div style={{ background: 'var(--tgui--secondary_bg_color)', height: '16px' }}></div>

      {/* Personal Information Section */}
      <Section style={{}}
        header={
          <div style={{ padding: '20px 24px 16px' }}>
            <Text style={{ color: '#007AFF', fontSize: '18px', fontWeight: '600' }}>Personal Information</Text>
          </div>
        }
      >

        <Input header="First Name" placeholder="Jane"></Input>
        <Input header="Last Name" placeholder="Smith"></Input>
        <Input header="Email" placeholder="janesmith@email.com"></Input>

      </Section>

      <div style={{ background: 'var(--tgui--secondary_bg_color)', paddingBottom: '16px' }}></div>

      {/* Files Section */}
      <Section>
        <Section
          header={
            <div style={{ padding: '20px 24px 16px' }}>
              <Text style={{ color: '#007AFF', fontSize: '18px', fontWeight: '600' }}>Files</Text>
            </div>
          }
        >
          <Cell
            style={{ marginTop: '-12px' }}
            before={
              <Avatar
                src={pdf}
                style={{
                  borderRadius: '12px',
                  width: '48px',
                  height: '48px'
                }}
              />
            }
            description={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ color: 'var(--tgui--text-secondary)' }}>PDF Document</Text>
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
            after={<IconButton mode="plain" style={{ color: '#A2ACB0' }}>
            <IoMdClose size={28} />
          </IconButton>}
          >
            resume.pdf
          </Cell>
        </Section>


        <FileInput
          multiple
          onChange={function noRefCheck() { }}
        />

      </Section>

      <div style={{ background: 'var(--tgui--secondary_bg_color)', paddingBottom: '16px' }}></div>

      <Section>
        <Section
          header={
            <div style={{ padding: '20px 24px 16px' }}>
              <Text style={{ color: '#007AFF', fontSize: '18px', fontWeight: '600' }}>Links</Text>
            </div>
          }
        >
          <Input header="LinkedIn Profile" placeholder="Enter your LinkedIn profile URL"></Input>

        </Section>

      </Section>

      <Section
        header={
          <div style={{ padding: '20px 24px 16px', paddingTop:'40px' }}>
          </div>
        }>
        <SectionFooter style={{
          padding: '16px 24px',
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
        }}>
          <Button size='l'
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              backgroundColor: '#007AFF',
              color: 'white',
              border: 'none',
              fontSize: '17px',
              fontWeight: '500'
            }}
          >
            Apply
          </Button>
        </SectionFooter>
      </Section>
    </AppRoot>
  );
};

export default ScreenFour;