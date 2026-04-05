import { CourseTemplate } from '@/components/CourseTemplate';
import { getCourseById } from '@/Data/courses';
const CourseMasterclassLamination = () => <CourseTemplate course={getCourseById('velvet-lift')!} />;
export default CourseMasterclassLamination;
