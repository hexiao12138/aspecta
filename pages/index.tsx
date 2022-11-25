import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import Input from '../components/input';
import { getCandidates } from './api/answer';
import Tag from '../components/tag';
export default function Answer() {
  const router = useRouter();
  const [skills, setSkills] = useState([''])
  const [formData, setFormData] = useState({github: '', stackoverflow: '', linkedin: '', identifier: ''})
  const setSkillList = (value: string) => {
    !skills.find(i => i === value) && value && setSkills([...skills, value])
  }
  const confirm = async () => {
   const res = await getCandidates({
      skill_names: skills,
      candidates: [{
        accounts: {
          github: formData.github,
          stackoverflow: formData.stackoverflow,
          linkedin: formData.linkedin,
          academic: ''
        },
        identifier: ''
      }]
    })
    router.push('/result')
  }
  return <Layout>
    <div className='py-2 px-6 mx-10 mt-5 bg-[#fff]'>
      <div className='flex justify-end mb-16'>
        <div className='bg-[#e2e1e2] rounded-2xl py-0.5 px-10 mr-1 text-xs'>Candidate Search</div>
        <div className='bg-[#e2e1e2] rounded-2xl py-0.5 px-10 text-xs'>Candidate Assessment</div>
      </div>
      <form>
        <Input labelClass='w-[35%] text-center text-xs sm:text-base ' label='Name' value={formData.identifier} placeholder='Enter Candidate Name' required={true} getInputValue={(value) => setFormData({...formData, identifier: value}) } />
        <div>
          <label>Account URLs</label>
          <Input labelClass='w-[35%] text-center text-xs sm:text-base ' label='Microsoft Academic URL' value={formData.linkedin} placeholder='Enter Candidate Name' getInputValue={(value) => setFormData({...formData, linkedin: value}) } />
          <Input labelClass='w-[35%] text-center text-xs sm:text-base ' label='Github Account URL' value={formData.github} placeholder='Enter Candidate Name' getInputValue={(value) => setFormData({...formData, github: value}) } />
          <Input labelClass='w-[35%] text-center text-xs sm:text-base ' label='Stack Overflow Account URL' value={formData.stackoverflow} placeholder='Enter Candidate Name' getInputValue={(value) => setFormData({...formData, stackoverflow: value}) } />
        </div>
        <Input labelClass='w-[35%] text-center text-xs sm:text-base ' label='Skills' placeholder='Select Skills' keyDownHandler={setSkillList} />
        <div className='ml-[25%] flex flex-wrap'>
          {
            skills?.map(i => 
              i ? <div onClick={() => setSkills(skills.filter(j => j !== i))} key={i}><Tag  text={i} /></div> : null
            )
          }
        </div>
        <div className='inline-block bg-[#f1f6fe] text-[#28488d] px-3 py-1 font-medium'>
          + More
        </div>
        <div className='flex justify-end items-center'>
          <span className='cursor-pointer text-[#afafaf]' onClick={() => setFormData({github: '', stackoverflow: '', linkedin: '', identifier: ''})}>Reset</span>
          <span className='ml-5 cursor-pointer bg-[#1d3f87] text-[#fff] rounded-3xl px-10 py-1 text-[20px]' onClick={confirm}>Assess</span>
        </div>
      </form>
    </div>
  </Layout>
}
