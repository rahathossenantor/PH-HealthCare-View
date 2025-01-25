"use client";

import VideoCaller from "@/components/ui/VideoCaller";

const VideoCall = ({ searchParams: { videoCallId } }: any) => {

    return (
        <VideoCaller videoCallId={videoCallId} />
    );
};

export default VideoCall;
