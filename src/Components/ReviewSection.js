import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { InnerLaout } from '../Styled/Layout'
import ReviewItem from './ReviewItem'

const ReviewSection = () => {
    return (
        <ReviewSectionStyle>
            <Title title="Reviews" span="Reviews" />
            <InnerLaout>
                <div className="reviews">
                    <ReviewItem text="lorene   ds fs re re s f s f r fsfksfasf a fa as fas fas fas fa faf" />
                    <ReviewItem text="lorene   ds fs re re s f s f r fsfksfasf a fa as fas fas fas fa faf" />
                
                </div>
            </InnerLaout>
        </ReviewSectionStyle>
    )
}

const ReviewSectionStyle = styled.section`
        .reviews{
                
        }
`
export default ReviewSection
