import { Text } from "@mantine/core";

export const topInputFields = [
  {
    label: "Learner's Name:",
    name: "name",
  },
  {
    label: "Classroom Educator:",
    name: "teacher",
  },
  {
    label: "Session:",
    name: "session",
  },
  {
    label: "Class:",
    name: "class",
  },
];

export const performanceArray = [
  {
    id: 1,
    content: (
      <div key={1}>
        <Text className="font-bold text-[15px]">4 - Exceeding Standards</Text>
        <Text className="font-bold text-[15px]">3 - Meeting Standards</Text>
        <Text className="font-bold text-[15px]">2 - Approaching Standards</Text>
        <Text className="font-bold text-[15px]">1 - Below Standards</Text>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div key={2}>
        <Text className="font-bold text-[15px]">Att - Attendance</Text>
        <Text className="font-bold text-[15px]">Nt - Note Taken</Text>
        <Text className="font-bold text-[15px]">Ass - Assignment</Text>
        <Text className="font-bold text-[15px]">Cw - Class Work</Text>
      </div>
    )
  }
];


export const standards = [
  {
    title: '4 – Exceeding Standards',
    descriptions: [
      'Demonstrates superior understandings',
      'Exceeds requirements for proficeincy - level work',
      'Consistently applies and extends learned concept and skills independently',
    ],
  },
  {
    title: '3 - Meeting Standards',
    descriptions: [
      'Demonstrates and applies knowledge and understanding of learned concept and skills',
      'Meets requirements for proficeincy - level work',
      'Often exceeds expectations for quality of work',
      'Completes work accurately and independently',
    ],
  },
  {
    title: '2 - Approaching Standards',
    descriptions: [
      'Demonstrates superior understandings',
      'Beginning to meet requirements for proficeincy - level work',
      'Requires some extra time, instruction, assistance and/or practice',
    ],
  },
  {
    title: '1 - Below Standards',
    descriptions: [
      'Demonstrates minimal understandings',
      'Seldom meets requirements for proficiency - level work',
      'Requires an extended amount of time, instruction, assistance and/or practice',
    ],
    style: 'md:border-r-[1.5px] max-md:border-b-[1.5px]'
  },
];


export const tableHeaders = [
  { id: 1, title: 'Subject' },
  { id: 2, title: 'Att' },
  { id: 3, title: 'Nt' },
  { id: 4, title: 'Ass' },
  { id: 5, title: 'Cw' },
  { id: 6, title: 'Test' },
  { id: 7, title: 'Total' },
  { id: 8, title: 'Performance<br />Levels', isHTML: true },
];

export const primarySubjects = [
  'Mathematics',
  'English Studies',
  'Basic Science & Technology',
  'Verbal Reasoning',
  'Quantitative Reasoning',
  'Physical and Health Education',
  'National & Values Education',
  'Religious Knowledge',
  'Pre-Vocational Aptitude',
  'French',
  'Writing Skils',
  'History',
];

export const secondarySubjects = [
  'Mathematics',
  'English Studies',
  'Biology',
  'Data Processing',
  'Civic Education',
  'Marketing',
  'Economics',
  'Further Maths',
  'Agricultural Science',
  'Chemistry',
  'Physics',
  'Christian Religious Studies',
  'Literature In English',
  'Government',
  'Visual Art',
];

export const childDevelopment = [
  { id: 1, title: 'Interact well with others', class: 'font-bold' },
  { id: 2, title: 'Participates in Group activities' },
  { id: 3, title: 'Keep hands to self' },
  { id: 4, title: 'Respects the rules of the school'},
  { id: 5, title: 'Shows self-confidence' },
  { id: 6, title: "Take care of one's own needs" },
  { id: 7, title: 'Work Habits', class: 'font-bold' },
  { id: 8, title: 'Litens attentively' },
  { id: 9, title: 'Follows simple directions' },
  { id: 10, title: 'Handles materials carefully' },
  { id: 11, title: 'Has good clean-up habits' },
  { id: 12, title: 'Motor Skills', class: 'font-bold' },
  { id: 13, title: 'Fit small items together' },
  { id: 14, title: 'Holds pencil/marker correctly' },
  { id: 15, title: 'Sport Activities' }
];


export const comments = [
  { id: 1, label: 'Teacher Observation and Comments:', name: "teacher" },
  { id: 2, label: 'Teacher Observation and Comments:', name: "principal"},
  { id: 3, label: 'Resumption for Second Half:', name: "date"},
];

export const signature = [
  { id: 1, label: "Teacher's Signature", name: "teacher" },
  { id: 2, label: "Head teacher's Signature", name: "principal"}
];




