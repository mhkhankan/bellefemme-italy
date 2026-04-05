import { CourseTemplate } from '@/components/CourseTemplate';
import { getCourseById } from '@/Data/courses';
const CourseOmbreLips = () => <CourseTemplate course={getCourseById('nude-lip-atelier')!} />;
export default CourseOmbreLips;
