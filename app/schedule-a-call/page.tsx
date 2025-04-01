"use client"
import React from 'react'
import ScheduleCall from '@/components/ScheduleCall/ScheduleCall'
import Breadcrumb from '@/components/Common/Breadcrumb'
const ScheduleCallPage = () => {
    return (
        <div>
            {/* <Breadcrumb
                pageName="Schedule a Call"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            /> */}
            <section className="pt-[120px] pb-[120px]">
                <div className="container">
                <h1 className='text-center text-2xl font-bold'>Schedule a Call</h1>
                <ScheduleCall />
                </div>
            </section>
        </div>
    )
}

export default ScheduleCallPage
