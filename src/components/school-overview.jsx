import React from 'react'
import './school-overview.scss'

const LabeledField = ({label, value, ...props}) => {
	return (
		<div className='labeled-field'>
			<div className='label'>{label}</div>
			<div className='field-value'>{value}</div>
			{ props.secondaryValue ? <div className='secondary-field-value'>{props.secondaryValue}</div> : null}
		</div>
	)
}

const SchoolOverview = ({ schoolName, graduated, graduationDate, degree, children, ...props}) => {
	return (
		<div className='school-overview-container'>
			<div className='school-name'>{schoolName}</div>
			<div className='school-header'>
				<LabeledField label="Degree" value={degree}  secondaryValue={props.specialization} />
				<LabeledField label={graduated ? "Graduated" : "Graduating"} value={graduationDate} />
			</div>
			{ children }
		</div>
	)
}

export default SchoolOverview;