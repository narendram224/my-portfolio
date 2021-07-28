import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { InnerLayout } from '../Styled/Layout'
import ReviewItem from './ReviewItem'

const ReviewSection = () => {
    return (
        <ReviewSectionStyle>
            <Title title="Reviews" span="Reviews" />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text="lorene   ds fs re re s f s f r fsfksfasf a fa as fas fas fas fa faf" />
                    <ReviewItem text="lorene   ds fs re re s f s f r fsfksfasf a fa as fas fas fas fa faf" />
                    <ReviewItem text="lorene   ds fs re re s f s f r fsfksfasf a fa as fas fas fas fa faf" />

                    <ReviewItem text="lorene   ds fs re re s f s f r fsfksfasf a fa as fas fas fas fa faf" />
                    <ReviewItem text="lorene   ds fs re re s f s f r fsfksfasf a fa as fas fas fas fa faf" />
                </div>
            </InnerLayout>
        </ReviewSectionStyle>
    )
}

const ReviewSectionStyle = styled.section`
    .reviews {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;

        @media screen and (max-width: 850px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`
export default ReviewSection
